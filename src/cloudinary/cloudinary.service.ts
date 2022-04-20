import * as toStream from 'buffer-to-stream';

import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';

import { Injectable } from '@nestjs/common';

@Injectable()
export class CloudinaryService {
  async uploadImage(
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream((error, result) => {
        if (error) return reject(error);
        if (!result) return reject(null);
        resolve(result);
      });
      toStream(file.buffer).pipe(upload);
    });
  }
}
