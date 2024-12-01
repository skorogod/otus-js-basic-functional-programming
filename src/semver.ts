export function semverSort(args: string[]): string[] {
    return args.map((a) =>a.split(".")
                    .map((n) => +n + 100000)
                    .join(".")
    )
    .sort()
    .map((a) =>
      a
        .split(".")
        .map((n) => +n - 100000)
        .join(".")
    );
}