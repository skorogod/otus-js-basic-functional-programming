export interface job {
    (): Promise<number>;
}

export class Parallel {
    private readonly threadsCount;
  
    private readonly result: number[] = [];
  
    constructor(n: number) {
      this.threadsCount = n;
    }
  
    async jobs(...args: job[]) {
      const jobs = [...args];
      const jobsCount = args.length;
  
      return new Promise((resolve) => {
        if (this.threadsCount > jobsCount) {
          throw new Error(
            "Max jobs count reached"
          );
        }
  
        const chain = (): void => {
          const currentJob = jobs.shift();
  
          if (currentJob) {
            currentJob()
              .then((value) => {
                this.result.push(value);
  
                if (this.result.length === jobsCount) {
                  return resolve(this.result);
                }
  
                return chain();
              })
              .catch((e) => console.error(e));
          }
        };
  
        for (let i = 0; i < this.threadsCount; i++) {
          chain();
        }
      });
    }
  }