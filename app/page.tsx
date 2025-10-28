'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const BlockMath = dynamic(() => import('react-katex').then(mod => mod.BlockMath), { ssr: false });
const InlineMath = dynamic(() => import('react-katex').then(mod => mod.InlineMath), { ssr: false });

interface Topic {
  id: string;
  title: string;
  content: React.ReactNode;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<'linear-algebra' | 'calculus'>('linear-algebra');
  const [activeTopic, setActiveTopic] = useState<string>('matrices');

  const linearAlgebraTopics: Topic[] = [
    {
      id: 'matrices',
      title: 'Matrices & Determinants',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-blue-600">Matrix Definition</h3>
            <p className="mb-3">A matrix is a rectangular array of numbers arranged in rows and columns:</p>
            <BlockMath math="A = \begin{bmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{bmatrix}" />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-blue-600">Types of Matrices</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Square Matrix:</strong> m = n (rows equal columns)</li>
              <li><strong>Diagonal Matrix:</strong> All non-diagonal elements are zero</li>
              <li><strong>Identity Matrix:</strong> Diagonal elements are 1, others are 0</li>
              <li><strong>Symmetric Matrix:</strong> A = A<sup>T</sup></li>
              <li><strong>Skew-Symmetric Matrix:</strong> A = -A<sup>T</sup></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-blue-600">Determinant of 2×2 Matrix</h3>
            <BlockMath math="\det(A) = \begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc" />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-blue-600">Properties of Determinants</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>det(AB) = det(A) × det(B)</li>
              <li>det(A<sup>T</sup>) = det(A)</li>
              <li>If two rows are identical, det(A) = 0</li>
              <li>Swapping two rows changes sign of determinant</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'vectors',
      title: 'Vector Spaces',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-blue-600">Vector Definition</h3>
            <p className="mb-3">A vector is an ordered list of numbers:</p>
            <BlockMath math="\vec{v} = \begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{bmatrix}" />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-blue-600">Vector Operations</h3>
            <p className="mb-2"><strong>Addition:</strong></p>
            <BlockMath math="\vec{u} + \vec{v} = \begin{bmatrix} u_1 + v_1 \\ u_2 + v_2 \\ \vdots \\ u_n + v_n \end{bmatrix}" />

            <p className="mb-2 mt-4"><strong>Scalar Multiplication:</strong></p>
            <BlockMath math="c\vec{v} = \begin{bmatrix} cv_1 \\ cv_2 \\ \vdots \\ cv_n \end{bmatrix}" />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-blue-600">Dot Product</h3>
            <BlockMath math="\vec{u} \cdot \vec{v} = u_1v_1 + u_2v_2 + \cdots + u_nv_n = |\vec{u}||\vec{v}|\cos\theta" />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-blue-600">Cross Product (3D)</h3>
            <BlockMath math="\vec{u} \times \vec{v} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \end{vmatrix}" />
          </div>
        </div>
      ),
    },
    {
      id: 'eigenvalues',
      title: 'Eigenvalues & Eigenvectors',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-blue-600">Definition</h3>
            <p className="mb-3">For a square matrix A, if there exists a non-zero vector <InlineMath math="\vec{v}" /> and scalar λ such that:</p>
            <BlockMath math="A\vec{v} = \lambda\vec{v}" />
            <p className="mt-3">Then λ is an <strong>eigenvalue</strong> and <InlineMath math="\vec{v}" /> is the corresponding <strong>eigenvector</strong>.</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-blue-600">Characteristic Equation</h3>
            <p className="mb-3">To find eigenvalues, solve:</p>
            <BlockMath math="\det(A - \lambda I) = 0" />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-blue-600">Example</h3>
            <p className="mb-3">Find eigenvalues of:</p>
            <BlockMath math="A = \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix}" />
            <p className="mb-2">Characteristic equation:</p>
            <BlockMath math="\begin{vmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{vmatrix} = (4-\lambda)(3-\lambda) - 2 = 0" />
            <BlockMath math="\lambda^2 - 7\lambda + 10 = 0 \Rightarrow \lambda = 5, 2" />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-blue-600">Properties</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Sum of eigenvalues = trace(A)</li>
              <li>Product of eigenvalues = det(A)</li>
              <li>Eigenvectors corresponding to distinct eigenvalues are linearly independent</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'linear-systems',
      title: 'Linear Systems',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-blue-600">System of Linear Equations</h3>
            <BlockMath math="\begin{cases} a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = b_1 \\ a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n = b_2 \\ \vdots \\ a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n = b_m \end{cases}" />
            <p className="mt-3">Matrix form: <InlineMath math="A\vec{x} = \vec{b}" /></p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-blue-600">Cramer's Rule (for n×n systems)</h3>
            <BlockMath math="x_i = \frac{\det(A_i)}{\det(A)}" />
            <p className="mt-2">where A<sub>i</sub> is A with column i replaced by <InlineMath math="\vec{b}" /></p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-blue-600">Gaussian Elimination</h3>
            <p className="mb-3">Transform augmented matrix [A|b] to row echelon form:</p>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Forward elimination to get upper triangular form</li>
              <li>Back substitution to find solutions</li>
            </ol>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-blue-600">Rank and Solutions</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Unique solution:</strong> rank(A) = rank([A|b]) = n</li>
              <li><strong>Infinite solutions:</strong> rank(A) = rank([A|b]) &lt; n</li>
              <li><strong>No solution:</strong> rank(A) &lt; rank([A|b])</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  const calculusTopics: Topic[] = [
    {
      id: 'limits',
      title: 'Limits & Continuity',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-green-600">Limit Definition</h3>
            <BlockMath math="\lim_{x \to a} f(x) = L" />
            <p className="mt-3">means f(x) approaches L as x approaches a.</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-green-600">Important Limits</h3>
            <BlockMath math="\lim_{x \to 0} \frac{\sin x}{x} = 1" />
            <BlockMath math="\lim_{x \to 0} \frac{1 - \cos x}{x} = 0" />
            <BlockMath math="\lim_{x \to 0} (1 + x)^{1/x} = e" />
            <BlockMath math="\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e" />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-green-600">L'Hôpital's Rule</h3>
            <p className="mb-3">For indeterminate forms 0/0 or ∞/∞:</p>
            <BlockMath math="\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}" />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-green-600">Continuity</h3>
            <p className="mb-3">f(x) is continuous at x = a if:</p>
            <ol className="list-decimal ml-6 space-y-2">
              <li>f(a) is defined</li>
              <li><InlineMath math="\lim_{x \to a} f(x)" /> exists</li>
              <li><InlineMath math="\lim_{x \to a} f(x) = f(a)" /></li>
            </ol>
          </div>
        </div>
      ),
    },
    {
      id: 'derivatives',
      title: 'Differentiation',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-green-600">Derivative Definition</h3>
            <BlockMath math="f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}" />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-green-600">Basic Rules</h3>
            <BlockMath math="\frac{d}{dx}(x^n) = nx^{n-1}" />
            <BlockMath math="\frac{d}{dx}(e^x) = e^x" />
            <BlockMath math="\frac{d}{dx}(\ln x) = \frac{1}{x}" />
            <BlockMath math="\frac{d}{dx}(\sin x) = \cos x" />
            <BlockMath math="\frac{d}{dx}(\cos x) = -\sin x" />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-green-600">Product & Quotient Rules</h3>
            <p className="mb-2"><strong>Product Rule:</strong></p>
            <BlockMath math="(fg)' = f'g + fg'" />
            <p className="mb-2 mt-4"><strong>Quotient Rule:</strong></p>
            <BlockMath math="\left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}" />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-green-600">Chain Rule</h3>
            <BlockMath math="\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)" />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-green-600">Implicit Differentiation</h3>
            <p className="mb-3">For equations not explicitly solved for y, differentiate both sides with respect to x.</p>
            <p className="mb-2">Example: x² + y² = 25</p>
            <BlockMath math="2x + 2y\frac{dy}{dx} = 0 \Rightarrow \frac{dy}{dx} = -\frac{x}{y}" />
          </div>
        </div>
      ),
    },
    {
      id: 'integrals',
      title: 'Integration',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-green-600">Indefinite Integral</h3>
            <BlockMath math="\int f(x)\,dx = F(x) + C" />
            <p className="mt-3">where F'(x) = f(x) and C is the constant of integration.</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-green-600">Basic Integration Formulas</h3>
            <BlockMath math="\int x^n\,dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)" />
            <BlockMath math="\int \frac{1}{x}\,dx = \ln|x| + C" />
            <BlockMath math="\int e^x\,dx = e^x + C" />
            <BlockMath math="\int \sin x\,dx = -\cos x + C" />
            <BlockMath math="\int \cos x\,dx = \sin x + C" />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-green-600">Definite Integral</h3>
            <BlockMath math="\int_a^b f(x)\,dx = F(b) - F(a)" />
            <p className="mt-3">Represents the area under the curve from x = a to x = b.</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-green-600">Integration by Parts</h3>
            <BlockMath math="\int u\,dv = uv - \int v\,du" />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-green-600">Integration by Substitution</h3>
            <BlockMath math="\int f(g(x))g'(x)\,dx = \int f(u)\,du \quad \text{where } u = g(x)" />
          </div>
        </div>
      ),
    },
    {
      id: 'applications',
      title: 'Applications of Calculus',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-green-600">Area Between Curves</h3>
            <BlockMath math="A = \int_a^b [f(x) - g(x)]\,dx" />
            <p className="mt-3">where f(x) ≥ g(x) on [a, b]</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-green-600">Volume of Revolution</h3>
            <p className="mb-2"><strong>Disk Method:</strong></p>
            <BlockMath math="V = \pi\int_a^b [f(x)]^2\,dx" />
            <p className="mb-2 mt-4"><strong>Shell Method:</strong></p>
            <BlockMath math="V = 2\pi\int_a^b x \cdot f(x)\,dx" />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-green-600">Arc Length</h3>
            <BlockMath math="L = \int_a^b \sqrt{1 + [f'(x)]^2}\,dx" />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-green-600">Maxima and Minima</h3>
            <p className="mb-3">Critical points occur where f'(x) = 0 or f'(x) is undefined.</p>
            <p className="mb-2"><strong>Second Derivative Test:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li>If f''(c) &gt; 0, then x = c is a local minimum</li>
              <li>If f''(c) &lt; 0, then x = c is a local maximum</li>
              <li>If f''(c) = 0, test is inconclusive</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-green-600">Mean Value Theorem</h3>
            <p className="mb-3">If f is continuous on [a,b] and differentiable on (a,b), then ∃c ∈ (a,b) such that:</p>
            <BlockMath math="f'(c) = \frac{f(b) - f(a)}{b - a}" />
          </div>
        </div>
      ),
    },
    {
      id: 'series',
      title: 'Series & Sequences',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-green-600">Taylor Series</h3>
            <BlockMath math="f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n" />
            <p className="mt-3">Maclaurin Series (a = 0):</p>
            <BlockMath math="f(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \cdots" />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-green-600">Common Series</h3>
            <BlockMath math="e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots" />
            <BlockMath math="\sin x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots" />
            <BlockMath math="\cos x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots" />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-green-600">Convergence Tests</h3>
            <p className="mb-2"><strong>Ratio Test:</strong></p>
            <BlockMath math="\lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right| = L" />
            <ul className="list-disc ml-6 space-y-2 mt-2">
              <li>L &lt; 1: converges absolutely</li>
              <li>L &gt; 1: diverges</li>
              <li>L = 1: test inconclusive</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-green-600">Geometric Series</h3>
            <BlockMath math="\sum_{n=0}^{\infty} ar^n = \frac{a}{1-r} \quad \text{for } |r| < 1" />
          </div>
        </div>
      ),
    },
  ];

  const currentTopics = activeSection === 'linear-algebra' ? linearAlgebraTopics : calculusTopics;
  const currentTopic = currentTopics.find(t => t.id === activeTopic) || currentTopics[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            📐 LaC Math Notes - B.Tech
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Linear Algebra & Calculus Comprehensive Guide
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 flex gap-6">
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sticky top-24">
            {/* Section Toggle */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => {
                  setActiveSection('linear-algebra');
                  setActiveTopic('matrices');
                }}
                className={`flex-1 py-2 px-3 rounded-lg font-semibold transition ${
                  activeSection === 'linear-algebra'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                Linear Algebra
              </button>
              <button
                onClick={() => {
                  setActiveSection('calculus');
                  setActiveTopic('limits');
                }}
                className={`flex-1 py-2 px-3 rounded-lg font-semibold transition ${
                  activeSection === 'calculus'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                Calculus
              </button>
            </div>

            {/* Topics List */}
            <nav>
              <h3 className="font-bold text-gray-700 dark:text-gray-300 mb-3">Topics</h3>
              <ul className="space-y-2">
                {currentTopics.map(topic => (
                  <li key={topic.id}>
                    <button
                      onClick={() => setActiveTopic(topic.id)}
                      className={`w-full text-left py-2 px-3 rounded-lg transition ${
                        activeTopic === topic.id
                          ? activeSection === 'linear-algebra'
                            ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-semibold'
                            : 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 font-semibold'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {topic.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className={`text-3xl font-bold mb-6 ${
              activeSection === 'linear-algebra' ? 'text-blue-600' : 'text-green-600'
            }`}>
              {currentTopic.title}
            </h2>
            <div className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-200">
              {currentTopic.content}
            </div>
          </div>

          {/* Quick Reference Card */}
          <div className="mt-6 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-3">
              💡 Quick Tips for B.Tech Students
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-purple-900 dark:text-purple-100">
              <li>Practice numerical problems daily - theory alone won't help in exams</li>
              <li>Keep a formula sheet handy and revise it before exams</li>
              <li>Understand the geometric interpretation of concepts</li>
              <li>Use online tools like WolframAlpha for verification</li>
              <li>Form study groups to discuss complex topics</li>
              <li>Previous year papers are your best friends</li>
            </ul>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 shadow-md mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400">
          <p>Created for B.Tech students | Study hard, ace your exams! 🎓</p>
        </div>
      </footer>
    </div>
  );
}
