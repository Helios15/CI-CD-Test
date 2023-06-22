import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ApiConsumes } from '@nestjs/swagger';
import { AppService } from './app.service';
import { FileUploadDTO } from './dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('upload')
  //@UseInterceptors(FileInterceptor())
  @UseInterceptors(FileFieldsInterceptor([{ name: 'file', maxCount: 1 }])) // muốn limit giới hạn gửi file
  @ApiConsumes('multipart/form-data')
  uploadImages(
    @Body() dto: FileUploadDTO,
    @UploadedFiles()
    files: {
      file?: Express.Multer.File;
    },
  ) {
    return this.appService.readDataFromExcel(files.file[0]);
  }
  // AWS key : -----BEGIN RSA PRIVATE KEY-----
  /* MIIEogIBAAKCAQEAi1inu/OJwuZRSoWvzg6vmssM+9Klj6WzoF4on1DIWPFiD8jF
hlG0z93NpiE9yLwuCpI77PO2gdLxwoxW4mZsLvdFv8PUFl/t7lEvODcJKC8h4hwz
VX6TeHr+sG04lOv5qsJiPk3bjZGNc7P8t7fT75GiXdkr4gyCHPRzTg8DxsavOV9v
j9eRQfHtxePaBn4jonv6uL9quqZDQXEW3VsJPwGR1pJ2/oBz12gr687LCch6QJis
7FbltlimjFToyqy14zGFIJh+6pprNcJSI+UF3+qvGnHeqKCXA6EBZXe3jfav0YMX
XrupjzDXXrUhet8ExEPfGvq2Zu+5b3LjiM6HEQIDAQABAoIBAEAe2ohdR54ct3lw
TPanwVycZOwYAUE5gY+g5FZzKM3svTAANgxZ2rbwHKp+j1yoYxNQOS0O9IOG2uKo
C28ArHVsKXdVmGl3WRgZ2X2nrZoFHjVavrBvn1KIXlw21huI/oj6C5UZ5JafTJTa
VMcBWw/ZVvqSbWQGV3UVc12PATDdHC2bTKlnCM6G9Ww24YO1Bjr0bfkMJR6UdhaV
ietTgwwv1SAh6V9BDoQNIGpQDu+PvO1TSpJBFTMQE15bIzKqpRpukEiJ7ujjKsPZ
wsM95H27Cae1lee89hJPU31sjuJD7FkA9xNy1csOAwNim3oM5NXTiOKTqDTfQoeD
LRzIUTECgYEAyLYeltsxU5WgMTuG5gBZGhtTmvJ0Jbiq7hwaG/C/rmcQ7EJ4x9B2
qFFE3Qh6r2+dgtNesiUFS7OZUq81mHByGjssZ5zHUz7YMsJ5syI9+044zhJGoG6S
mBRBHuZjgNbtVl+j7TSJmh2iI4dFOSvd3lIRKpui1eA6ndr9N9roNXUCgYEAsbso
Pk2udwLMO1rUxJmXqdmC8WF6j1JtHLyW/aIjdFATeWCHp2CLKv1EC8EFVk5mC4/T
TqCcvddXXDrrox74HcpnI54Yzf9SpS9B8ZHOOnVP2rW2z/7c1pOUovNXtwSRPj0N
FJ3QsvDeA4g0c8ryqRwXiNaJZzcYMgJxxwOQ660CgYBhdPzZZ0lGOqrz/OF9oMGj
CY3I+N0oy8hDoeWTl4ybVHRFI+mdrD1RcVSstsdLlDi5I4UhnxQ5M9XI7kZp5H+i
+QSQsvGeHC/CReft8TyDX/H5LaqZj9cifQM5y8iY8MOBYyMntJD0AluOQMp9/izX
HKY1OCkTDLOpnoHBs0t5WQKBgAKHCtd3+1ct7wGZFRWGqaV8tmQAYuHO5kZWWD9b
Iu3whZZgTQ2QTepal7EjGZRUoRbhALxJhHEesttY6yjys8yYqEbVZLzpOJ+owGNT
E3+5U11k4CitEy7qAl8e3sx3gClGbP0yEVm6Gy4prbVH2ZOWFq+XfXS+T9XGOx/9
aP4xAoGAANW0VD2RJplgnR6TGHxhs3Js0wXFTxosAvA6WsAw38f9SEJaDHz9vTFD
bWxmzVF4j+IPRxab32wZMvPGhneEJ6WTpKZmxP6RTbD81eE0JXzzzsBFPGjAxe2+
pFhJuJpFx6PGlhHfvKOMlzMoLHail6bDZuF5QrVEcp0kwfvUxMo=
-----END RSA PRIVATE KEY----- */
  // deploy-key:  ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDI6mrCXG5lyWTdPHJlir9cAAWBx/NoSa/BobpkkPN4Lz9aIQstVzQTPEOBQs91BmgD9lLS5nU1Mp4ZbHuF47FJ60E1HD5QNgTNqupOIHH5iyz8vd6zoRlKlLVqFRT97VYZ+YOqNdY39CDLIMCXk61tcTUeRu5mUMcUD2m+CO2PbPBXzs2pXlLeFo0q5E6tfIyOEYwq6rNJBlkETVAaxoGavRHPKHOFCKHTpXIJREzWZDN0oyvBzbkCHKoOCehHlR76RWuwSCZb5EObk/1RWkkzh25FC+Hqbv0JWUGnYojxa5fTdBbrigzAvueSmBIK7gGrbm4Kruw4sQhW2PKgX9et ec2-user@ip-172-31-23-138.ap-southeast-1.compute.internal
  // ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDibMdS+ZHibdJqvqBe038V71fgYbrrSWxLeK8wiJg4gbjZuVsK0ky7N6WgSrxXN0PEA/p1ScsuwrTTQL50RafCLXPPgwDJ/256/ACbYRkWfjjkbtA6DbsZFDAgJh5/7lwjvVXiGddv3KVvRtuo+iO86YG5e2zuGZtlNed6pWgg3vdASai3Y1lr2SSESZ0J5IY9TzhLhlCUyht7GPcqInheo3A9Ve2H9sJetuctlpUYWMAqZUtZ2PVVXcH4dQvm2WnB2GdI+UGkH4EnzdQYMmeGb6kqWL3Cp14ny5vnASDG3OLqyXjy8+bUNkbISbGidL2riFysVRMHfjtHKiaOkXpEnW/RGULKwhJqhC+1fAqx/YxsKUTzgRteecT10+DWj9kTGYCH2Wd/qdtFk5fDhq0Yqmowui0jcxHhqEd+ka/cYftrJ4WKO3gecqSpqIc/xNnH88dv3LmhPIBrc4i6XvLioaPPObo68OWWQfnjIKzEjbTWaSfakdsZJaAUxExcMAH6egSlmnaIIFh5BJxMJx0J3/cGR4HyiI1ETOixwaFEjQs+p9PJj5kqzfyRwRxf4ZsRNecjpV7naBhfXMmQyjrRB8snjaGAmLjQ6cTm8eAvGWPamtCADSgRQs+ELR/+3Pda1gMQZWOg22/N+CE0C7M04oUwWCcNOfX8jB+L2n/C1Q== ubuntu@ip-172-31-20-181
}
