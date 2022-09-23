import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ManMeasure, ManMeasureSchema } from './schema/man-measure.schema';
import { WomanMeasure, WomanMeasureeSchema } from './schema/woman-measure.schema';

@Module({
    imports:[MongooseModule.forFeature([
        {name: ManMeasure.name, schema: ManMeasureSchema},
        {name: WomanMeasure.name, schema: WomanMeasureeSchema}
        ])]
})
export class MeasureModule {}
