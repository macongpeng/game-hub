export interface Platform {
    id: number;
    name: string;
    slug: string;
    platforms: {
        id: number;
        name: string;
        slug: string;
        games_count: number;
        image_background: string;
        image: null;
        year_start: number | null;
        year_end: number | null;
    }[];
}
