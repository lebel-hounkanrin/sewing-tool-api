import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class ManMeasure {
    @Prop({required: true})
    nom: String

    @Prop(
        raw({
            longueur: Number,
            dos: Number,
            bras: Number,
            longueur_taille: Number,
            tour_poitrine: Number,
            tour_taille: Number,
            col: Number,
            tour_bras: Number,
        })
    )
    haut: any

    @Prop(
        raw({
            longueur: Number,
            ceinture: Number,
            tour_fesses: Number,
            tour_cuisses:Number,
            tour_genoux:Number,
            tour_bas:Number,
        })
    )
    bas:any
    
}

export const ManMeasureSchema = SchemaFactory.createForClass(ManMeasure)