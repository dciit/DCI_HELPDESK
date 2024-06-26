export interface MContext {
    appname?: string;
    version?: number;
    workorder?: MResultWorkorder;
    result?: MResultWorkorder;
    setResult?: any;
    themelight?: MTheme;
    contact?:string;
}
export interface MTheme {
    bgColor?: string;
    textContentColor?: string;
    textTitleColor?: string;
}
export interface MWorkorderList {
    label: string;
    list: MWorkorderItemList[];
}
export interface MWorkorderItemList {
    text: string;
    active: boolean;
}
export interface MResultWorkorder {
    type?: number;
    fac?: number;
    location?: string;
    detail?: string;
    empcode?: string;
}
export interface MLocation {
    dictId: string;
    text: string;
}