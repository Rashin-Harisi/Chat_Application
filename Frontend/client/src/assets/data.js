const data = [
    {
        id: 1,
        image: "/john.svg",
        name: "",
        username: "J0hn_90",
        messages: [
            {
                id: 12,
                date: "02.05.26",
                time: "17:50",
                content: "Hi, Are you comming to the party?",
                seen: false,
            }
        ],
        last_seen_date: "yesterday 15:45",
    },
    {
        id: 2,
        image: "/carol.svg",
        name: "Carol Smith",
        username: "C@r0L",
        messages: [
            {
                id: 22,
                date: "27.02.26",
                time: "8:30",
                content: "Hi Carol, Please check your email.",
                seen: false,
            }
        ],
        last_seen_date: "Long days ago",
    },
    {
        id: 3,
        image: "/carol.svg",
        name: "Alice Johnson",
        username: "Alice_J",
        messages: [
            {
                id: 32,
                date: "01.03.26",
                time: "12:15",
                content: "Can we reschedule our meeting?",
                seen: true,
            }
        ],
        last_seen_date: "today 10:00",
    },
    {
        id: 4,
        image: "/john.svg",
        name: "Bob Brown",
        username: "Bobby_B",
        messages: [
            {
                id: 42,
                date: "28.02.26",
                time: "14:20",
                content: "Don't forget to submit the report.",
                seen: false,
            }
        ],
        last_seen_date: "yesterday 18:30",
    },
    {
        id: 5,
        image: "/carol.svg",
        name: "Emma Wilson",
        username: "Emma_W",
        messages: [
            {
                id: 52,
                date: "03.03.26",
                time: "09:45",
                content: "Happy Birthday!",
                seen: true,
            }
        ],
        last_seen_date: "today 09:50",
    },
    {
        id: 6,
        image: "/john.svg",
        name: "Mike Davis",
        username: "MikeD",
        messages: [
            {
                id: 62,
                date: "02.03.26",
                time: "16:00",
                content: "Let's catch up soon.",
                seen: false,
            }
        ],
        last_seen_date: "yesterday 20:00",
    },
    {
        id: 7,
        image: "/carol.svg",
        name: "Sarah Lee",
        username: "Sarah_L",
        messages: [
            {
                id: 72,
                date: "04.03.26",
                time: "11:30",
                content: "Can you send me the files?",
                seen: true,
            }
        ],
        last_seen_date: "today 11:45",
    },
    {
        id: 8,
        image: "/john.svg",
        name: "David Clark",
        username: "Dave_C",
        messages: [
            {
                id: 82,
                date: "03.03.26",
                time: "18:00",
                content: "Meeting postponed to tomorrow.",
                seen: false,
            }
        ],
        last_seen_date: "yesterday 19:00",
    },
    {
        id: 9,
        image: "/carol.svg",
        name: "",
        username: "Nina_A",
        messages: [
            {
                id: 92,
                date: "02.03.26",
                time: "15:00",
                content: "Looking forward to our call.",
                seen: true,
            }
        ],
        last_seen_date: "today 14:00",
    },
    {
        id: 10,
        image: "/john.svg",
        name: "Oliver Green",
        username: "Oli_G",
        messages: [
            {
                id: 102,
                date: "01.03.26",
                time: "10:00",
                content: "Please review the document.",
                seen: false,
            }
        ],
        last_seen_date: "yesterday 10:30",
    },
];

export default data;