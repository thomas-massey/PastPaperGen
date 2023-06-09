export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      customers: {
        Row: {
          id: string
          stripe_customer_id: string | null
        }
        Insert: {
          id: string
          stripe_customer_id?: string | null
        }
        Update: {
          id?: string
          stripe_customer_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      level: {
        Row: {
          examBoard: string
          id: number
          level: string
          subject: string
          topic: string
          year: number
        }
        Insert: {
          examBoard?: string
          id?: number
          level?: string
          subject?: string
          topic?: string
          year: number
        }
        Update: {
          examBoard?: string
          id?: number
          level?: string
          subject?: string
          topic?: string
          year?: number
        }
        Relationships: []
      }
      paper: {
        Row: {
          author: string | null
          created_at: string
          description: string
          id: string
          markSchemeUrl: string
          ownedUsers: string | null
          questionUrl: string
          simpleId: string
          title: string
          updated_at: string
        }
        Insert: {
          author?: string | null
          created_at?: string
          description?: string
          id: string
          markSchemeUrl: string
          ownedUsers?: string | null
          questionUrl: string
          simpleId: string
          title?: string
          updated_at?: string
        }
        Update: {
          author?: string | null
          created_at?: string
          description?: string
          id?: string
          markSchemeUrl?: string
          ownedUsers?: string | null
          questionUrl?: string
          simpleId?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "paper_author_fkey"
            columns: ["author"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "paper_ownedUsers_fkey"
            columns: ["ownedUsers"]
            referencedRelation: "paper_user_inter"
            referencedColumns: ["id"]
          }
        ]
      }
      paper_question_inter: {
        Row: {
          id: number
          paperId: string | null
          questionId: number | null
        }
        Insert: {
          id?: number
          paperId?: string | null
          questionId?: number | null
        }
        Update: {
          id?: number
          paperId?: string | null
          questionId?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "paper_question_inter_paperId_fkey"
            columns: ["paperId"]
            referencedRelation: "paper"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "paper_question_inter_questionId_fkey"
            columns: ["questionId"]
            referencedRelation: "question"
            referencedColumns: ["id"]
          }
        ]
      }
      paper_user_inter: {
        Row: {
          id: string
          paperId: string
          userId: string
        }
        Insert: {
          id: string
          paperId: string
          userId: string
        }
        Update: {
          id?: string
          paperId?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "paper_user_inter_paperId_fkey"
            columns: ["paperId"]
            referencedRelation: "paper"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "paper_user_inter_userId_fkey"
            columns: ["userId"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      prices: {
        Row: {
          active: boolean | null
          currency: string | null
          description: string | null
          id: string
          interval: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count: number | null
          metadata: Json | null
          product_id: string | null
          trial_period_days: number | null
          type: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount: number | null
        }
        Insert: {
          active?: boolean | null
          currency?: string | null
          description?: string | null
          id: string
          interval?: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count?: number | null
          metadata?: Json | null
          product_id?: string | null
          trial_period_days?: number | null
          type?: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount?: number | null
        }
        Update: {
          active?: boolean | null
          currency?: string | null
          description?: string | null
          id?: string
          interval?: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count?: number | null
          metadata?: Json | null
          product_id?: string | null
          trial_period_days?: number | null
          type?: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "prices_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      products: {
        Row: {
          active: boolean | null
          description: string | null
          id: string
          image: string | null
          metadata: Json | null
          name: string | null
        }
        Insert: {
          active?: boolean | null
          description?: string | null
          id: string
          image?: string | null
          metadata?: Json | null
          name?: string | null
        }
        Update: {
          active?: boolean | null
          description?: string | null
          id?: string
          image?: string | null
          metadata?: Json | null
          name?: string | null
        }
        Relationships: []
      }
      question: {
        Row: {
          created_at: string | null
          difficulty: string
          id: number
          marks: number
          markSchemeUrl: string
          metadata: number | null
          questionUrl: string
          simpleId: string
        }
        Insert: {
          created_at?: string | null
          difficulty?: string
          id?: number
          marks: number
          markSchemeUrl?: string
          metadata?: number | null
          questionUrl?: string
          simpleId: string
        }
        Update: {
          created_at?: string | null
          difficulty?: string
          id?: number
          marks?: number
          markSchemeUrl?: string
          metadata?: number | null
          questionUrl?: string
          simpleId?: string
        }
        Relationships: [
          {
            foreignKeyName: "question_metadata_fkey"
            columns: ["metadata"]
            referencedRelation: "level"
            referencedColumns: ["id"]
          }
        ]
      }
      subscriptions: {
        Row: {
          cancel_at: string | null
          cancel_at_period_end: boolean | null
          canceled_at: string | null
          created: string
          current_period_end: string
          current_period_start: string
          ended_at: string | null
          id: string
          metadata: Json | null
          price_id: string | null
          quantity: number | null
          status: Database["public"]["Enums"]["subscription_status"] | null
          trial_end: string | null
          trial_start: string | null
          user_id: string
        }
        Insert: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created?: string
          current_period_end?: string
          current_period_start?: string
          ended_at?: string | null
          id: string
          metadata?: Json | null
          price_id?: string | null
          quantity?: number | null
          status?: Database["public"]["Enums"]["subscription_status"] | null
          trial_end?: string | null
          trial_start?: string | null
          user_id: string
        }
        Update: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created?: string
          current_period_end?: string
          current_period_start?: string
          ended_at?: string | null
          id?: string
          metadata?: Json | null
          price_id?: string | null
          quantity?: number | null
          status?: Database["public"]["Enums"]["subscription_status"] | null
          trial_end?: string | null
          trial_start?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_price_id_fkey"
            columns: ["price_id"]
            referencedRelation: "prices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          billing_address: Json | null
          full_name: string | null
          id: string
          payment_method: Json | null
        }
        Insert: {
          avatar_url?: string | null
          billing_address?: Json | null
          full_name?: string | null
          id: string
          payment_method?: Json | null
        }
        Update: {
          avatar_url?: string | null
          billing_address?: Json | null
          full_name?: string | null
          id?: string
          payment_method?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      pricing_plan_interval: "day" | "week" | "month" | "year"
      pricing_type: "one_time" | "recurring"
      subscription_status:
        | "trialing"
        | "active"
        | "canceled"
        | "incomplete"
        | "incomplete_expired"
        | "past_due"
        | "unpaid"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
