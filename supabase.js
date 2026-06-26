import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = 'https://tmzvfoamwytjbvgeywyj.supabase.co'
const SUPABASE_KEY = 'sb_publishable_kGwCqB7mp_tc5hDregFzlQ_ys6aqeV0'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)