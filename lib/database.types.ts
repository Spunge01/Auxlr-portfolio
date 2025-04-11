export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      contacts: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          phone: string | null
          company: string | null
          message: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          phone?: string | null
          company?: string | null
          message: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          phone?: string | null
          company?: string | null
          message?: string
        }
      }
      projects: {
        Row: {
          id: string
          created_at: string
          title: string
          description: string
          image_url: string
          category: string
          tags: string[]
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          description: string
          image_url: string
          category: string
          tags: string[]
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          description?: string
          image_url?: string
          category?: string
          tags?: string[]
        }
      }
      team_members: {
        Row: {
          id: string
          created_at: string
          name: string
          role: string
          bio: string
          image_url: string
          social_linkedin: string | null
          social_twitter: string | null
          social_github: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          role: string
          bio: string
          image_url: string
          social_linkedin?: string | null
          social_twitter?: string | null
          social_github?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          role?: string
          bio?: string
          image_url?: string
          social_linkedin?: string | null
          social_twitter?: string | null
          social_github?: string | null
        }
      }
      testimonials: {
        Row: {
          id: string
          created_at: string
          name: string
          company: string
          quote: string
          rating: number
          image_url: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          company: string
          quote: string
          rating: number
          image_url?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          company?: string
          quote?: string
          rating?: number
          image_url?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
