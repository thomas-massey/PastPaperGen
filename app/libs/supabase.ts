
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nhwhzjzejsppmempvbnd.supabase.co'
const supabaseKey: string = process.env.SUPABASE_KEY || ''
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase