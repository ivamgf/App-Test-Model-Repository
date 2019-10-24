export interface Weather {
  weather: {
  by: string;
    valid_key: any;
    results: {
        temp: number,
        date: any,
        time: any,
        condition_code: any,
        description: string,
        currently: string,
        cid: string,
        city: string,
        img_id: any,
        humidity: number,
        wind_speedy: string,
        sunrise: any,
        sunset: any,
        condition_slug: string,
        city_name: string,
        forecast: [
            {
                date: any,
                weekday: string,
                max: number,
                min: number,
                description: string,
                condition: string
            },
            {
                date: any,
                weekday: string,
                max: number,
                min: number,
                description: string,
                condition: string
            },
            {
                date: any,
                weekday: string,
                max: number,
                min: number,
                description: string,
                condition: string
            },
            {
                date: any,
                weekday: string,
                max: number,
                min: number,
                description: string,
                condition: string
            },
            {
                date: any,
                weekday: string,
                max: number,
                min: number,
                description: string,
                condition: string
            },
            {
                date: any,
                weekday: string,
                max: number,
                min: number,
                description: string,
                condition: string
            },
            {
                date: any,
                weekday: string,
                max: number,
                min: number,
                description: string,
                condition: string
            },
            {
                date: any,
                weekday: string,
                max: number,
                min: number,
                description: string,
                condition: string
            },
            {
                date: any,
                weekday: string,
                max: number,
                min: number,
                description: string,
                condition: string
            },
            {
                date: any,
                weekday: string,
                max: number,
                min: number,
                description: string,
                condition: string
            }
        ]
    };
    execution_time: number;
    from_cache: any;
  };
}
