declare module '@tryghost/content-api' {
    interface GhostContentApiOptions {
        url: string;
        key: string;
        version: string;
    }

    interface BrowseOptions {
        include?: string | string[];
        filter?: string;
        limit?: number | string;
        page?: number | string;
        order?: string;
    }

    interface ReadOptions {
        include?: string | string[];
    }

    interface GhostAPI {
        posts: {
            browse: (options?: BrowseOptions) => Promise<unknown[]>;
            read: (data: { id?: string; slug?: string }, options?: ReadOptions) => Promise<unknown>;
        };
        tags: {
            browse: (options?: BrowseOptions) => Promise<unknown[]>;
        };
        authors: {
            browse: (options?: BrowseOptions) => Promise<unknown[]>;
        };
        pages: {
            browse: (options?: BrowseOptions) => Promise<unknown[]>;
            read: (data: { id?: string; slug?: string }, options?: ReadOptions) => Promise<unknown>;
        };
    }

    // It acts as a class constructor
    class GhostContentAPI implements GhostAPI {
        constructor(options: GhostContentApiOptions);
        posts: GhostAPI['posts'];
        tags: GhostAPI['tags'];
        authors: GhostAPI['authors'];
        pages: GhostAPI['pages'];
    }

    export default GhostContentAPI;
}
