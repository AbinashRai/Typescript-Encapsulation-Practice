class Social {
  username: string;
  followers: number = 0;
  posts: string[] = [];

  constructor(username: string) {
    this.username = username;
    this.followers = 0;
    this.posts = [];
  }

  post(message: string) {
    if (message.length > 0) {
      this.posts.push(message);
      console.log("Your message has been posted");
    } else {
      console.log("Your message is empty");
    }
  }

  follow() {
    this.followers++;
    console.log(`${this.username} gained a follower`);
  }

  unfollow() {
    if (this.followers > 0) {
      this.followers--;
      console.log(`${this.username} has lost a follower`);
    } else {
      console.log("The user doesn't have any followers");
    }
  }
}

// instance
const user1 = new Social("Jack");

user1.post("First post");
user1.post("Second post");
console.log(`${user1.username} has posted: ${user1.posts[1]}`);

user1.follow();
user1.follow();
user1.unfollow();

console.log(`${user1.username} has ${user1.followers} followers`);
