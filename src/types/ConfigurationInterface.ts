/// Server settings interface
export interface ConfigurationInterface {
    environment: EnvironmentType;
    database: DatabaseConfiguration;
    secret: string;
}

/// MongoDB conf interface
export interface DatabaseConfiguration {
    user: string;
    password?: string;
    host: string;
    port?: string;
    name: string;
    auth: string;
    replicaSet?: string;
}


/// Env types
export type EnvironmentType =
    | 'production'
    | 'development'
    | 'test';

