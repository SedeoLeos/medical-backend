import { Module } from '@nestjs/common';
import { UniqueConstraintTypeOrm } from './custom-decorator/unique.decorator';
import { ExistConstraintTypeOrm } from './custom-decorator/exist.decorator';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [],
  exports: [
    UniqueConstraintTypeOrm,
    ExistConstraintTypeOrm,
  ],
  providers: [UniqueConstraintTypeOrm, ExistConstraintTypeOrm],
})
export class CommonModule {}
