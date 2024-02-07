import { IsInt, Length, Max, Min } from "class-validator"

export class CreateSongDto{

    @Length(5, 30)
    name? : string

    @Length(5, 30)
    author? : string

    @IsInt()
    @Max(60)
    @Min(0)
    duraction? : number
    
    @Min(1950)
    @Max(2024)
    @IsInt()
    year? : number


}