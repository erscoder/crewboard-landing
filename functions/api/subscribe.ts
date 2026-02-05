// @ts-nocheck
interface Env {
  WAITLIST_KV: any;
}

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  const { request, env } = context;
  
  try {
    const body = await request.json() as { email?: string };
    const email = body.email?.toLowerCase().trim();
    
    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Store with timestamp
    await env.WAITLIST_KV.put(email, JSON.stringify({
      email,
      subscribedAt: new Date().toISOString()
    }));
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
