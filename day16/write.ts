/**
 *  实现一个LazyMan，可以按照以下方式调用:
    LazyMan(“Hank”)输出:
    Hi! This is Hank!

    LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
    Hi! This is Hank!
    //等待10秒..
    Wake up after 10
    Eat dinner~

    LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
    Hi This is Hank!
    Eat dinner~
    Eat supper~
    LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
    //等待5秒
    Wake up after 5
    Hi This is Hank!
    Eat supper

 */

    function LazyMan(name: string) {

        
        const list = [];
        let isSleep = false;
        const methods = {
            sleepFirst(time: number){
                list.unshift({
                    type: 'sleep',
                    str: time,
                })
                return methods;
            },
            sleep(time: number){
                list.push({
                    type: 'sleep',
                    str: time,
                })
                return methods;
            },
            eat(str: string){
                list.push({
                    type: 'eat',
                    str,
                })
                return methods;
            }
        }
        const log = (str: string) => {
            list.push({type: 'log', str})
            return methods
        }

        const handle = (item: any) => {
            const {type, str} = item;
            switch (type) {
                case 'eat':
                    console.log(`Eat ${str}~`)
                    break;
                case 'sleep':
                    isSleep = true;
                    setTimeout(() => {
                        isSleep = false;
                        console.log(` Wake up after ${str}`);
                    }, str * 1000);
                    break;
                case 'log':
                    console.log(`Hi! This is ${str}!`);
                    return
                default:
                    break;
            }
        }

        const loop = () => {
            setTimeout(() => {
                if (isSleep) {
                    loop()
                } else if (list.length > 0) {
                    handle(list.shift());
                    loop();
                }
            }, 0);
        }

        loop();
        return log(name);
    }

    LazyMan('Hark').eat('eat').sleep(1).eat('suger');