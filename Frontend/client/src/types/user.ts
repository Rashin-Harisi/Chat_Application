export type User = {
    id: number,
    image : string,
    name :  string,
    username: string,
    messages:{
            id : number,
            date: string,
            time: string,
            content: string,
            seen: boolean,
    }[],
    last_seen_date : string,
}