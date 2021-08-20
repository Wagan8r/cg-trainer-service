export interface Secrets {
    DB_HOST: string;
    DB_PASSWORD: string;
}

export interface Configuration extends Secrets {
    PORT: number;
    DB_PORT: number;
    DB_USERNAME: string;
    DB_DATABASE: string;
    DB_SCHEMA: string;
    LOG_LEVEL: string;
    DISABLE_LOGGING: boolean;
}
