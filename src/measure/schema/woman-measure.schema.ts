import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class WomanMeasure {
    @Prop({required: true})
    nom: String

    @Prop(
        raw({
            hauteur_poitrine: Number,
            longueur_sous_sein: Number,
            longueur_taille: Number,
            longueur_corsage: Number,
            largeur_dos: Number,
            longueur_bras: Number,
            tour_poitrine:Number,
            tour_sous_sein: Number,
            tour_taille: Number,
            tour_hanche:Number,
            tour_bras: Number,
            cou:Number,
        })
    )
    haut: any

    @Prop(
        raw({
            longueur_pantalon: Number,
            tour_petit_taille:Number,
            tour_hanche:Number,
            tour_bassin:Number,
            tour_fesses: Number,
            tour_cuisses:Number,
            tour_genoux:Number,
            tour_bas:Number,
        })
    )
    bas:any
    
}

export const WomanMeasureeSchema = SchemaFactory.createForClass(WomanMeasure)