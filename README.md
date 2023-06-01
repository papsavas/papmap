# PapMap
## Monitored Javascript Map

> *An extension from [@discordjs/collection](https://github.com/discordjs/discord.js/tree/main/packages/collection)*

Create and provide callbacks for your Map functions

```ts
interface Options{
  userId: string;
  postId: string;
}

const myMonitors: Monitors<string, Options> {
//  define your callbacks
  set(key, value){
    console.log(`inserted ${value.postId} post from user ${value.userId}`)
  }
  
  get(key, value){
    console.log(`retrieved ${value.postId} post`)
  }
}

const papmap = new PapMap<string, Options>(undefined, myMonitors);

papmap.set("<key>", { 
  userId: "<user_id>",
  postId: "<post_id>"
}) //  👁 inserted <post_id> post from user <user_id>


//  skip triggers
const data = papmap.get("<key>", false)
```
