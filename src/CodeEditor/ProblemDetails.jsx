import React from 'react';
import { Zap } from 'lucide-react';

const ProblemDetails = ({ title, description, difficulty, examples, constraints }) => {
    const difficultyMap = {
        'Easy': 'text-green-400 bg-green-400/10 border-green-400/20',
        'Medium': 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
        'Hard': 'text-red-400 bg-red-400/10 border-red-400/20',
    };

    const renderOutput = (output) => {
        if (output === null || output === undefined) return <p>N/A</p>;
        if (typeof output === 'boolean') return output ? 'True' : 'False';
        if (Array.isArray(output)) return `[${output.join(', ')}]`;
        return JSON.stringify(output);
    }

    return (
        <div className="p-4 sm:p-6 text-white h-full overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl sm:text-2xl font-bold text-white">{title}</h1>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${difficultyMap[difficulty] || 'text-gray-400 bg-gray-400/10'}`}>
                    {difficulty}
                </span>
            </div>
            
            <p className="text-gray-300 mb-6">{description}</p>

            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3">Examples</h2>
                <div className="space-y-4">
                    {examples?.map((example, index) => (
                        <div key={example._id || index} className="bg-[#1C1C1C] border border-gray-700 rounded-lg p-4">
                            <p className="font-mono text-sm text-gray-400 mb-2">Example {index + 1}:</p>
                            <p className="font-mono text-sm"><span className="text-gray-400">Input:</span> <span className="text-yellow-300">{JSON.stringify(example.input)}</span></p>
                            <p className="font-mono text-sm"><span className="text-gray-400">Output:</span> <span className="text-green-300">{renderOutput(example.output)}</span></p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-3">Constraints</h2>
                <ul className="space-y-2">
                    {constraints?.map((constraint, index) => (
                        <li key={index} className="flex items-start">
                            <Zap className="w-4 h-4 mr-2 mt-1 text-yellow-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{constraint}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProblemDetails;
