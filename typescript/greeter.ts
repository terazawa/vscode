class StartUp {
    public static main() : number {
        let user = "Keiji Terazawa";
        console.log(new StartUp().greeter(user));
        return 0;
    }

    greeter( person: string ) {
        return "Hello " + person;
    }
}

StartUp.main();