export interface User {
    id: string;
    account_id: string;
    username: string;
    display_name: string;
    created_at: string | Date;
    editors: string[];
    editor_of: string[];
    avatar_url: string;
}
