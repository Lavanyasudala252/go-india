const jsonData = [
  {
    username: 'John Doe',
    userimage: 'https://randomuser.me/api/portraits/men/1.jpg',
    time: '2 min ago',
    like: 10,
    comments: 5,
    share: 3,
    views: 100,
    post: {
      message: 'This is my post message',
      image: 'https://picsum.photos/400/300',
    },
  },
  {
    username: 'Jane Smith',
    userimage: 'https://randomuser.me/api/portraits/women/2.jpg',
    time: '1 hour ago',
    like: 20,
    comments: 8,
    share: 1,
    views: 200,
    post: {
      message: 'Hello, everyone!',
      image: 'https://picsum.photos/400/300',
    },
  },
  // Add more data entries here
];

// Generate 10 more data entries
for (let i = 0; i < 10; i++) {
  const randomUserImage = `https://randomuser.me/api/portraits/${
    Math.random() < 0.5 ? 'men' : 'women'
  }/${Math.floor(Math.random() * 99) + 1}.jpg`;

  const randomPostImage = `https://picsum.photos/400/300?random=${i + 1}`;

  jsonData.push({
    username: `User ${i + 1}`,
    userimage: randomUserImage,
    time: `${Math.floor(Math.random() * 60)} min ago`,
    like: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 20),
    share: Math.floor(Math.random() * 10),
    views: Math.floor(Math.random() * 500),
    post: {
      message: `This is post ${i + 1}`,
      image: Math.random() < 0.5 ? randomPostImage : undefined,
    },
  });
}

export const userPosts=jsonData