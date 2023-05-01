import { useCallback, useRef, useState } from "react";
import { Container, Button } from "./styles";
import { Ear, EarSlash } from "phosphor-react";

export default function AudioPlayer() {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const handleToggleAudio = useCallback(() => {
    if (audioRef.current) {
      if (audioEnabled) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
        audioRef.current.volume = 0.2;
      }
      setAudioEnabled(!audioEnabled);
    }
  }, [audioEnabled]);

  return (
    <Container>
      <Button onClick={handleToggleAudio}>
        {audioEnabled ? <Ear /> : <EarSlash />}
      </Button>
      <audio ref={audioRef} src="/opening.mp3" loop muted={!audioEnabled} />
    </Container>
  );
}
