

export class MissingOption extends Error {
    constructor(missingOption: string | Array<string>){
        super(`Sitemapy missing options in config: ${missingOption}`)
    }
}