declare function debounce(func: any, wait: number, options: any): {
    (this: any, ...args: any[]): any;
    cancel: () => void;
    flush: () => any;
    pending: () => boolean;
};
export default debounce;
