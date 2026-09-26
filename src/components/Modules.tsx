import React from 'react';

const MODULES = [
  {
    num: 'Module 01',
    title: 'Foundations of AI & Python',
    desc: 'Master linear algebra, vector calculus, statistical inference, NumPy, and Pandas to manipulate high-dimensional data arrays with speed.',
    tags: ['NumPy', 'Pandas', 'Linear Algebra', 'Statistics'],
  },
  {
    num: 'Module 02',
    title: 'Classical Machine Learning',
    desc: 'Supervised and unsupervised algorithms, feature engineering, gradient boosting with XGBoost/LightGBM, and rigorous cross-validation pipelines.',
    tags: ['Scikit-Learn', 'XGBoost', 'Regression', 'Ensembles'],
  },
  {
    num: 'Module 03',
    title: 'Deep Learning with PyTorch',
    desc: 'Neural network internals, custom autograd engines, convolutional neural networks (CNNs), sequence models, and GPU-accelerated training.',
    tags: ['PyTorch', 'CNNs', 'Backprop', 'CUDA'],
  },
  {
    num: 'Module 04',
    title: 'LLMs, Transformers & GenAI',
    desc: 'Self-attention mechanisms, Hugging Face transformers, fine-tuning techniques (LoRA/QLoRA), Retrieval-Augmented Generation (RAG), and agent systems.',
    tags: ['Transformers', 'HuggingFace', 'RAG', 'LoRA'],
  },
  {
    num: 'Module 05',
    title: 'Computer Vision & Multimodal',
    desc: 'Real-time object detection (YOLOv8/v11), semantic segmentation, OpenCV pipelines, and vision-language models (VLMs) for edge applications.',
    tags: ['OpenCV', 'YOLO', 'Segmentation', 'VLMs'],
  },
  {
    num: 'Module 06',
    title: 'MLOps & Model Deployment',
    desc: 'Containerization with Docker, high-throughput model serving with FastAPI and ONNX Runtime, model monitoring, and automated CI/CD pipelines.',
    tags: ['Docker', 'FastAPI', 'ONNX', 'CI/CD'],
  },
];

export default function Modules() {
  return (
    <section
      id="modules"
      className="relative z-10 w-full py-24 px-6 border-t border-white/[0.08]"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Eyebrow */}
        <div
          className="inline-block liquid-glass rounded-full px-5 py-1.5 mb-8
                     text-xs tracking-[0.2em] uppercase text-muted-foreground animate-fade-rise"
        >
          Curriculum & Roadmaps
        </div>

        {/* Title */}
        <h2
          className="animate-fade-rise text-4xl sm:text-5xl md:text-6xl font-normal
                     text-foreground leading-[1.05] mb-6"
          style={{
            fontFamily: "'Instrument Serif', serif",
            letterSpacing: '-2px',
          }}
        >
          Engineered to take you from{' '}
          <em className="not-italic text-muted-foreground">scratch</em>{' '}
          to{' '}
          <em className="not-italic text-muted-foreground">production.</em>
        </h2>

        {/* Tagline */}
        <p
          className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg
                     max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Hands-on tracks, open-source projects, and research sessions designed for every skill level.
        </p>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {MODULES.map((mod) => (
            <div
              key={mod.num}
              className="liquid-glass rounded-2xl p-8 flex flex-col gap-3
                         transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.03]"
            >
              <div
                className="text-muted-foreground text-xs uppercase tracking-widest font-mono"
              >
                {mod.num}
              </div>
              <h3
                className="text-foreground text-2xl font-normal"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {mod.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {mod.desc}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {mod.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
