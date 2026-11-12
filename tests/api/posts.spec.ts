
import { test, expect } from '@playwright/test';

const API_URL = 'https://jsonplaceholder.typicode.com';

test.describe('JSONPlaceholder API Tests', () => {

  // TEST 1: Retrieve a specific post
  test('should retrieve a post successfully', async ({ request }) => {

    const response = await request.get(`${API_URL}/posts/1`);

    expect(response.status()).toBe(200);

    expect(response.headers()['content-type']).toContain('application/json');

    const post = await response.json();

    expect(post.id).toBe(1);

    expect(post.userId).toBe(1);

    expect(post.title).toBeTruthy();

    expect(post.body).toBeTruthy();

  });

  // TEST 2: Retrieve posts for a specific user
  test('should retrieve posts belonging to user 1', async ({ request }) => {

    const response = await request.get(`${API_URL}/posts?userId=1`);

    expect(response.status()).toBe(200);

    const posts = await response.json();

    expect(posts.length).toBeGreaterThan(0);

    expect(posts.every((post: { userId: number }) => post.userId === 1))
      .toBeTruthy();

  });

  // TEST 3: Create a new post
  test('should successfully create a new post', async ({ request }) => {

    const newPost = {
      title: 'My First API Test',
      body: 'Testing API functionality with Playwright.',
      userId: 1
    };

    const response = await request.post(`${API_URL}/posts`, {
      data: newPost
    });

    expect(response.status()).toBe(201);

    const createdPost = await response.json();

    expect(createdPost.title).toBe(newPost.title);

    expect(createdPost.body).toBe(newPost.body);

    expect(createdPost.userId).toBe(newPost.userId);

    expect(createdPost.id).toBeTruthy();

  });

	//TEST 4:  Retrieve a nonexistent post
	test('should return an empty response for a nonexistent post ID', async ({request}) => {
		const response = await request.get(`${API_URL}/ posts/9999`);

		expect(response.status()).toBe(404);

	})

	// TEST 5: Retrieve comments for a specific post
  test('should retrieve comments belonging to post 1', async ({ request }) => {

    const response = await request.get(`${API_URL}/comments?postId=1`);

    expect(response.status()).toBe(200);

    const comments = await response.json();

    expect(comments.length).toBeGreaterThan(0);

    expect(comments.every((comment: { postId: number }) => comment.postId === 1))
      .toBe(true);

  });

	//Test 6: Retrieve nonexistent comment

	test('should return an empty array when no comments exist for a post', async ({request}) => {

		const response = await request.get(`${API_URL}/comments?postId=9999`);

		expect(response.status()).toBe(200);

		const comments = await response.json();

		// expect(comments.length).toBe(0);
		//a better way to write above explicitly makes sure it is an empty array 
		expect(comments).toEqual([]);
	})

});
