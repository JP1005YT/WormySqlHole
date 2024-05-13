import readline from "readline"

const commandsAndInterface = {
    interface : {
        mainMenu : "Terminator Version - prealpha1.0.0\n"
    },
    commands : [
        {}
    ]
}


export default class Terminator{
    terminal
    constructor(){
        this.terminal = readline.createInterface({
            input : process.stdin,
            output : process.stdout
        })
        this.terminal.question(commandsAndInterface.interface.mainMenu,(resp) => {
            test()
        })
    }
}