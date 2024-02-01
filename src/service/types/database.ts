export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      ageExp: {
        Row: {
          id: string
          label: Database['public']['Enums']['ageLabel']
          value: number
        }
        Insert: {
          id?: string
          label: Database['public']['Enums']['ageLabel']
          value: number
        }
        Update: {
          id?: string
          label?: Database['public']['Enums']['ageLabel']
          value?: number
        }
        Relationships: []
      }
      aplicante: {
        Row: {
          avatar_url: string
          dni: string
          id: string
          last_name: string
          name: string
          phone: string
          summary: string | null
        }
        Insert: {
          avatar_url: string
          dni: string
          id: string
          last_name: string
          name: string
          phone: string
          summary?: string | null
        }
        Update: {
          avatar_url?: string
          dni?: string
          id?: string
          last_name?: string
          name?: string
          phone?: string
          summary?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'aplicante_id_fkey'
            columns: ['id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      application_evaluation: {
        Row: {
          created_at: string
          id: string
          interesado: boolean | null
          notas: string | null
          postulaciones_id: string
          recruiter_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          interesado?: boolean | null
          notas?: string | null
          postulaciones_id: string
          recruiter_id: string
        }
        Update: {
          created_at?: string
          id?: string
          interesado?: boolean | null
          notas?: string | null
          postulaciones_id?: string
          recruiter_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'application_evaluation_postulaciones_id_fkey'
            columns: ['postulaciones_id']
            isOneToOne: false
            referencedRelation: 'postulaciones'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'application_evaluation_recruiter_id_fkey'
            columns: ['recruiter_id']
            isOneToOne: false
            referencedRelation: 'reclutador'
            referencedColumns: ['id']
          }
        ]
      }
      conocimientos: {
        Row: {
          id: string
          label: Database['public']['Enums']['conociminetosLabel']
          value: number
        }
        Insert: {
          id?: string
          label: Database['public']['Enums']['conociminetosLabel']
          value: number
        }
        Update: {
          id?: string
          label?: Database['public']['Enums']['conociminetosLabel']
          value?: number
        }
        Relationships: []
      }
      empresa: {
        Row: {
          company_address: string
          company_avatar_url: string
          company_name: string
          company_summary: string | null
          id: string
        }
        Insert: {
          company_address: string
          company_avatar_url: string
          company_name: string
          company_summary?: string | null
          id: string
        }
        Update: {
          company_address?: string
          company_avatar_url?: string
          company_name?: string
          company_summary?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'empresa_id_fkey'
            columns: ['id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      estudios: {
        Row: {
          id: string
          label: Database['public']['Enums']['estudiosLabel']
          value: number
        }
        Insert: {
          id?: string
          label: Database['public']['Enums']['estudiosLabel']
          value: number
        }
        Update: {
          id?: string
          label?: Database['public']['Enums']['estudiosLabel']
          value?: number
        }
        Relationships: []
      }
      idiomas: {
        Row: {
          id: string
          label: Database['public']['Enums']['idiomasLabel']
          value: number
        }
        Insert: {
          id?: string
          label: Database['public']['Enums']['idiomasLabel']
          value: number
        }
        Update: {
          id?: string
          label?: Database['public']['Enums']['idiomasLabel']
          value?: number
        }
        Relationships: []
      }
      postulaciones: {
        Row: {
          aplicante_id: string
          estado: string
          experiencia: string | null
          fecha_postulacion: string
          id: string
          otra_info: string | null
          sueldo: string
          trabajo_id: string
        }
        Insert: {
          aplicante_id: string
          estado?: string
          experiencia?: string | null
          fecha_postulacion?: string
          id?: string
          otra_info?: string | null
          sueldo: string
          trabajo_id: string
        }
        Update: {
          aplicante_id?: string
          estado?: string
          experiencia?: string | null
          fecha_postulacion?: string
          id?: string
          otra_info?: string | null
          sueldo?: string
          trabajo_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'postulaciones_aplicante_id_fkey'
            columns: ['aplicante_id']
            isOneToOne: false
            referencedRelation: 'aplicante'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'postulaciones_trabajo_id_fkey'
            columns: ['trabajo_id']
            isOneToOne: false
            referencedRelation: 'trabajo'
            referencedColumns: ['id']
          }
        ]
      }
      puesto: {
        Row: {
          id: string
          label: Database['public']['Enums']['puestoLabel']
          value: number
        }
        Insert: {
          id?: string
          label: Database['public']['Enums']['puestoLabel']
          value: number
        }
        Update: {
          id?: string
          label?: Database['public']['Enums']['puestoLabel']
          value?: number
        }
        Relationships: []
      }
      reclutador: {
        Row: {
          created_at: string
          empresa_id: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          empresa_id: string
          id: string
          name: string
        }
        Update: {
          created_at?: string
          empresa_id?: string
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: 'reclutador_empresa_id_fkey'
            columns: ['empresa_id']
            isOneToOne: false
            referencedRelation: 'empresa'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'reclutador_id_fkey'
            columns: ['id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      trabajo: {
        Row: {
          ageExp_col: string
          conocimientos_col: string
          contrato: Database['public']['Enums']['contrato']
          created_at: string
          description: string
          estudios_col: string
          id: string
          idiomas_col: string
          jornada: Database['public']['Enums']['jornada']
          modalidad: Database['public']['Enums']['modalidad']
          nivelExp: Database['public']['Enums']['nivelExp']
          puesto_col: string
          recruiter_id: string
          sueldo: number[]
          tittle: string
          ubicacion_col: string
        }
        Insert: {
          ageExp_col: string
          conocimientos_col: string
          contrato: Database['public']['Enums']['contrato']
          created_at?: string
          description: string
          estudios_col: string
          id?: string
          idiomas_col: string
          jornada: Database['public']['Enums']['jornada']
          modalidad: Database['public']['Enums']['modalidad']
          nivelExp: Database['public']['Enums']['nivelExp']
          puesto_col: string
          recruiter_id: string
          sueldo: number[]
          tittle: string
          ubicacion_col: string
        }
        Update: {
          ageExp_col?: string
          conocimientos_col?: string
          contrato?: Database['public']['Enums']['contrato']
          created_at?: string
          description?: string
          estudios_col?: string
          id?: string
          idiomas_col?: string
          jornada?: Database['public']['Enums']['jornada']
          modalidad?: Database['public']['Enums']['modalidad']
          nivelExp?: Database['public']['Enums']['nivelExp']
          puesto_col?: string
          recruiter_id?: string
          sueldo?: number[]
          tittle?: string
          ubicacion_col?: string
        }
        Relationships: [
          {
            foreignKeyName: 'trabajo_ageExp_col_fkey'
            columns: ['ageExp_col']
            isOneToOne: false
            referencedRelation: 'ageExp'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'trabajo_conocimientos_col_fkey'
            columns: ['conocimientos_col']
            isOneToOne: false
            referencedRelation: 'conocimientos'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'trabajo_estudios_col_fkey'
            columns: ['estudios_col']
            isOneToOne: false
            referencedRelation: 'estudios'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'trabajo_idiomas_col_fkey'
            columns: ['idiomas_col']
            isOneToOne: false
            referencedRelation: 'idiomas'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'trabajo_puesto_col_fkey'
            columns: ['puesto_col']
            isOneToOne: false
            referencedRelation: 'puesto'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'trabajo_recruiter_id_fkey'
            columns: ['recruiter_id']
            isOneToOne: false
            referencedRelation: 'reclutador'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'trabajo_ubicacion_col_fkey'
            columns: ['ubicacion_col']
            isOneToOne: false
            referencedRelation: 'ubicacion'
            referencedColumns: ['id']
          }
        ]
      }
      ubicacion: {
        Row: {
          id: string
          label: Database['public']['Enums']['ubicacionLabel']
          value: number
        }
        Insert: {
          id?: string
          label: Database['public']['Enums']['ubicacionLabel']
          value: number
        }
        Update: {
          id?: string
          label?: Database['public']['Enums']['ubicacionLabel']
          value?: number
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string
          id: string
          isform: boolean
          provider: string | null
          type_user: string | null
        }
        Insert: {
          created_at?: string
          id: string
          isform?: boolean
          provider?: string | null
          type_user?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          isform?: boolean
          provider?: string | null
          type_user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'users_id_fkey'
            columns: ['id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
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
      ageLabel:
      | 'Menos de 1 year'
      | '1 year'
      | '2 year'
      | '3 year'
      | '4 year'
      | '5 year'
      | '6 year'
      conociminetosLabel:
      | 'Angular'
      | 'React'
      | 'Vue'
      | 'Java'
      | 'C#'
      | 'Python'
      | 'PHP'
      | 'Ruby'
      | 'C++'
      contrato:
      | 'Ideterminado'
      | 'Temporal'
      | 'Voluntario'
      | 'Practicas'
      | 'Freelance'
      estudiosLabel: 'Bachiller' | 'Titulado' | 'Egresado' | 'Estudiante'
      idiomasLabel:
      | 'Ingles'
      | 'Frances'
      | 'Portugues'
      | 'Aleman'
      | 'Italiano'
      | 'Chino'
      | 'Japones'
      jornada:
      | 'Part Time'
      | 'Full Time'
      | 'Por Horas'
      | 'Fin de Semana'
      | 'Nocturno'
      modalidad: 'Presencial' | 'Remoto' | 'Hibrido'
      nivelExp: 'Lider' | 'Senior' | 'SemiSenior' | 'Junior' | 'Trainee'
      puestoLabel:
      | 'Administracion'
      | 'Arquitectura'
      | 'Arte y Cultura'
      | 'Atencion al Cliente'
      | 'Banca y Finanzas'
      | 'web'
      roles: 'user' | 'recruiter'
      type_user: 'aplicante' | 'empresa' | 'recruiter'
      ubicacionLabel:
      | 'Peru'
      | 'Argentina'
      | 'Chile'
      | 'Colombia'
      | 'Ecuador'
      | 'Mexico'
      | 'Uruguay'
      | 'Venezuela'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
  | keyof (Database['public']['Tables'] & Database['public']['Views'])
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
    Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
    Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
      ? R
      : never
  : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] &
  Database['public']['Views'])
    ? (Database['public']['Tables'] &
      Database['public']['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
        ? R
        : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
  | keyof Database['public']['Tables']
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
    Insert: infer I
  }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
  | keyof Database['public']['Tables']
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
    Update: infer U
  }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U
    }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
  | keyof Database['public']['Enums']
  | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof Database['public']['Enums']
    ? Database['public']['Enums'][PublicEnumNameOrOptions]
    : never
