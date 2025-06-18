import React, { useState } from 'react';

const cardSet = {
  title: "🧠 Computer Science Fundamentals",
  description: "Master the essential concepts of computer science and data structures",
  cards: [
    { front: "What is a data structure?", back: "A data structure is a way of organizing and storing data in a computer so that it can be accessed and modified efficiently.", category: "basics" },
    { front: "What is an array?", back: "An array is a collection of elements stored at contiguous memory locations, where each element can be accessed directly by its index.", category: "basics" },
    { front: "What is a linked list?", back: "A linked list is a linear data structure where each element is a separate object, and each element (or node) contains data and a reference to the next node.", category: "linear" },
    { front: "What is a stack?", back: "A stack is a linear data structure that follows the Last In, First Out (LIFO) principle.", category: "linear" },
    { front: "What is a queue?", back: "A queue is a linear data structure that follows the First In, First Out (FIFO) principle.", category: "linear" },
    { front: "What is a binary tree?", back: "A binary tree is a hierarchical data structure where each node has at most two children, referred to as the left child and right child.", category: "trees" },
    { front: "What is Big O notation?", back: "Big O notation describes the upper bound of an algorithm's time or space complexity in the worst-case scenario.", category: "algorithms" },
    { front: "What is a hash table?", back: "A hash table is a data structure that implements an associative array, mapping keys to values using a hash function.", category: "advanced" },
    { front: "What is recursion?", back: "Recursion is a programming technique where a function calls itself to solve smaller instances of the same problem.", category: "algorithms" },
    { front: "What is the difference between DFS and BFS?", back: "DFS (Depth-First Search) explores as far as possible along each branch before backtracking, while BFS (Breadth-First Search) explores all neighbors at the current depth before moving to the next level.", category: "algorithms" },
    { front: "What is a binary search tree?", back: "A binary search tree is a binary tree where the left subtree contains values less than the root, and the right subtree contains values greater than the root.", category: "trees" },
    { front: "What is dynamic programming?", back: "Dynamic programming is an optimization technique that solves complex problems by breaking them down into simpler subproblems and storing the results.", category: "algorithms" }
  ]
};


function Flashcard({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const getCardStyle = (category) => {
    const styles = {
      basics: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
      linear: { background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
      trees: { background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
      algorithms: { background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
      advanced: { background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }
    };
    return styles[category] || styles.basics;
  };

  return (
    <div 
      className={`flashcard ${isFlipped ? 'flipped' : ''}`} 
      onClick={() => setIsFlipped(!isFlipped)}
      style={getCardStyle(card.category)}
    >
      <div className="flashcard-content">
        <div className="flashcard-text">
          {isFlipped ? card.back : card.front}
        </div>
        <div className="flip-hint">
          {isFlipped ? '🔄 Click to see question' : '🔄 Click to reveal answer'}
        </div>
      </div>
    </div>
  );
}

function Flashcards() {
  const [currentIndex, setCurrentIndex] = useState(() => Math.floor(Math.random() * cardSet.cards.length));
  const [key, setKey] = useState(0); 
  const [studiedCards, setStudiedCards] = useState(0);

  const handleNext = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * cardSet.cards.length);
    } while (newIndex === currentIndex && cardSet.cards.length > 1);
    setCurrentIndex(newIndex);
    setKey(prev => prev + 1); 
    setStudiedCards(prev => prev + 1);
  };

  const handleReset = () => {
    setCurrentIndex(Math.floor(Math.random() * cardSet.cards.length));
    setKey(prev => prev + 1);
    setStudiedCards(0);
  };

  return (
    <div className="flashcards-app">
      <div className="header-section">
        <h1>{cardSet.title}</h1>
        <p className="description">{cardSet.description}</p>
        <div className="stats">
          <span className="stat-item">📚 Total cards: {cardSet.cards.length}</span>
          <span className="stat-item">🎯 Cards studied: {studiedCards}</span>
          <span className="stat-item">🔢 Current: {currentIndex + 1}</span>
        </div>
      </div>
      
      <Flashcard key={key} card={cardSet.cards[currentIndex]} />
      
      <div className="controls">
        <button onClick={handleNext} className="next-btn">
          🎲 Next Random Card
        </button>
        <button onClick={handleReset} className="reset-btn">
          🔄 Reset Progress
        </button>
      </div>
    </div>
  );
}

export default Flashcards;