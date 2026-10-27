#!/usr/bin/env python3
"""Converte o WAV do serviço de voz para MP3 antes de publicar o áudio.

Mesma fala, um sexto do tamanho — e o formato que todo navegador toca. Roda como uma
etapa separada porque o codificador é Python; o Node chama este script por áudio.

    python3 scripts/wav-to-mp3.py entrada.wav saida.mp3
"""

import sys
import wave

import lameenc


def main() -> int:
    source, target = sys.argv[1], sys.argv[2]
    with wave.open(source, "rb") as audio:
        channels = audio.getnchannels()
        rate = audio.getframerate()
        pcm = audio.readframes(audio.getnframes())

    encoder = lameenc.Encoder()
    encoder.set_bit_rate(64)
    encoder.set_in_sample_rate(rate)
    encoder.set_channels(channels)
    encoder.set_quality(5)

    with open(target, "wb") as out:
        out.write(encoder.encode(pcm) + encoder.flush())
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
