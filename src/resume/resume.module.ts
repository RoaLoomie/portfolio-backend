import { Module } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { ResumeController } from './resume.controller';
import { UploaderService } from 'src/services/uploader/s3.service';

@Module({
  controllers: [ResumeController],
  providers: [ResumeService],
})
export class ResumeModule {}
