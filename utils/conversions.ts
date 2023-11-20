

export function NTtoUnixDate(ntTime: number): Date {
    const windowsEpoch: Date = new Date(Date.UTC(1601,0,1,0,0,0,0));
    const seconds: number = ntTime / 1e7;
    const unixTimestamp: number = (windowsEpoch.getTime() / 1000) + seconds - 11644473600;
    return new Date(Math.floor(unixTimestamp));
}