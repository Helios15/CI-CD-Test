import { ApiPropertyOptional } from '@nestjs/swagger';

export class UploadFileDto {
  @ApiPropertyOptional({ type: 'string', format: 'binary', required: true })
  file: Express.Multer.File;
}
export class FileUploadDTO {
  @ApiPropertyOptional({ type: 'string', format: 'binary', required: true })
  file?: Express.Multer.File;

  // @ApiPropertyOptional({ type: 'string', format: 'binary', required: true })
  // backgroundOriginal?: Express.Multer.File;

  // @ApiPropertyOptional({ type: 'string', format: 'binary', required: true })
  // avatarCrop?: Express.Multer.File;

  // @ApiPropertyOptional({ type: 'string', format: 'binary', required: true })
  // backgroundCrop?: Express.Multer.File;
}
