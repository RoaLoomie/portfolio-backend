import { IsString } from "class-validator"

export class CreateBlogDto {
    @IsString()
    title: string
    @IsString()
    category?: string
    @IsString()
    image? : string
    @IsString()
    link?: string
    @IsString()
    content: string
}
