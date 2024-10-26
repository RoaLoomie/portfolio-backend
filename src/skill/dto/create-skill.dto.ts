import { IsNumber, IsString, Min, Max, IsPositive } from "class-validator"

export class CreateSkillDto {
    @IsString()
    name: string
    @IsNumber()
    @IsPositive()
    @Min(0)
    @Max(100)
    level: number
}
