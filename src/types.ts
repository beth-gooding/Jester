export type JokeWithTimeStamp = {
    timestamp: number;
    joke: string;
};

export type AppData = {
    jokes: JokeWithTimeStamp[];
};