import { Injectable } from '@nestjs/common';
import * as xlsx from 'xlsx';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World, Tuấn Anh!';
  }

  async readDataFromExcel(file: Express.Multer.File): Promise<any> {
    //console.log('Hello', file);
    const workbook = xlsx.read(file.buffer, { type: 'buffer' });
    //console.log('Hello: ', workbook);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    let jsonData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
    jsonData = jsonData.filter((e: any[]) => e.length > 0);
    let data = [];
    let i = 10;
    let y = 0;
    while (i < 3000) {
      // console.log(jsonData[123]);
      if (jsonData[i] && jsonData[i][1] && jsonData[i][1] === 'Tuấn Anh') {
        console.log(jsonData[i]);
        // if (jsonData[i][5] && (jsonData[i] as Array<any>).length <= 6)
        //     data.push(Number(jsonData[i][5]));
      }
      i++;
    }

    //console.log(data);
    return jsonData.filter((e: any[]) => e.length > 0);
  }
}
