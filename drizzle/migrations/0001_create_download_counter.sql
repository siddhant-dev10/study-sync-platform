CREATE TABLE public.download_stats (
  platform TEXT PRIMARY KEY,
  download_count BIGINT NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.download_stats TO anon;
GRANT SELECT ON public.download_stats TO authenticated;
GRANT ALL ON public.download_stats TO service_role;

ALTER TABLE public.download_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view download stats"
ON public.download_stats FOR SELECT TO anon, authenticated USING (true);

INSERT INTO public.download_stats (platform, download_count) VALUES ('macos', 0);

CREATE OR REPLACE FUNCTION public.increment_download(_platform TEXT)
RETURNS BIGINT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _count BIGINT;
BEGIN
  IF _platform NOT IN ('macos', 'windows', 'android', 'ios') THEN
    RAISE EXCEPTION 'Invalid platform';
  END IF;

  INSERT INTO public.download_stats (platform, download_count, updated_at)
  VALUES (_platform, 1, now())
  ON CONFLICT (platform) DO UPDATE
    SET download_count = public.download_stats.download_count + 1,
        updated_at = now()
  RETURNING download_count INTO _count;

  RETURN _count;
END;
$$;

GRANT EXECUTE ON FUNCTION public.increment_download(TEXT) TO anon, authenticated, service_role;