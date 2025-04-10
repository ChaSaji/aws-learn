CREATE TABLE public.blog (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_sub UUID NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- トリガー関数作成
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW(); 
  RETURN NEW; 
END;
$$ LANGUAGE plpgsql;

-- トリガー登録
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON public.blog
FOR EACH ROW
EXECUTE FUNCTION trigger_set_timestamp();