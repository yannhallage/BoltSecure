// lib/storage.ts
export const storage = {
    async get(keys: string[]) {
        return new Promise<Record<string, any>>((resolve) => {
            chrome.storage.local.get(keys, (result) => {
                resolve(result);
            });
        });
    },

    async set(items: Record<string, any>) {
        return new Promise<void>((resolve) => {
            chrome.storage.local.set(items, () => {
                resolve();
            });
        });
    },

    async remove(keys: string | string[]) {
        return new Promise<void>((resolve) => {
            chrome.storage.local.remove(keys, () => resolve());
        });
    }
};
