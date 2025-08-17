const handleExportAnimationMP4 = async (containerSelector: string) => {
  const container = document.querySelector<HTMLDivElement>(containerSelector);
  if (!container) return;

  const stream: MediaStream = await navigator.mediaDevices.getDisplayMedia({
    video: true,
  });

  const recorder = new MediaRecorder(stream);
  const chunks: BlobPart[] = [];

  recorder.ondataavailable = (e: BlobEvent) => chunks.push(e.data);
  recorder.start();

  await new Promise<void>((res) => setTimeout(res, 6000)); //TO-DO: Calculate duration based on animation if needed

  await new Promise<void>((res) => {
    recorder.onstop = () => res();
    recorder.stop();
  });

  const blob = new Blob(chunks, { type: "video/mp4" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "animation.mp4";
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 100);
};

export default handleExportAnimationMP4;
