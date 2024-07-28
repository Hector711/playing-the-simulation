import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);



// export const onAuthStateChange = () => {
//   const { data } = supabase.auth.onAuthStateChange((event, session) => {
//     console.log(event, session);
//     if (event === 'INITIAL_SESSION') {
//       // handle initial session
//     } else if (event === 'SIGNED_IN') {
//       // handle sign in event
//     } else if (event === 'SIGNED_OUT') {
//       // handle sign out event
//     } else if (event === 'PASSWORD_RECOVERY') {
//       // handle password recovery event
//     } else if (event === 'TOKEN_REFRESHED') {
//       // handle token refreshed event
//     } else if (event === 'USER_UPDATED') {
//       // handle user updated event
//     }
//   });

//   // call unsubscribe to remove the callback
//   data.subscription.unsubscribe();
// };
