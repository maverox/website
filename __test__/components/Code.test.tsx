import React from 'react';
import { render, screen } from '@testing-library/react';
import Code from '~/components/Code';
import { BlockContext, BlockContextValue } from '~/context';

describe('Code component rendering', () => {
  it('renders children correctly', () => {
    render(<Code>const x = 10;</Code>);
    const childrenElem = screen.getByText('const x = 10;');
    expect(childrenElem).toBeInTheDocument();
  });
});

describe('Code Component styling based on BlockContext', () => {
  // Test with BlockContextValue.null
  it('applies correct class based on block context value: null', () => {
    render(
      <BlockContext.Provider value={null}>
        <Code>const x = 10;</Code>
      </BlockContext.Provider>,
    );
    const codeElement = screen.queryAllByText('code');
    codeElement.forEach((elem) => {
      expect(elem).toHaveClass('bg-slate-100 dark:bg-slate-900');
    });
  });

  // Test with BlockContextValue.Information
  it('applies correct class based on block context value: Information', () => {
    render(
      <BlockContext.Provider value={BlockContextValue.Information}>
        <Code>const x = 10;</Code>
      </BlockContext.Provider>,
    );
    const codeElement = screen.queryAllByText('code');
    codeElement.forEach((elem) => {
      expect(elem).toHaveClass('bg-amber-200');
    });
  });

  // Test with BlockContextValue.CodeBlock
  it('applies correct class based on block context value: Information', () => {
    render(
      <BlockContext.Provider value={BlockContextValue.CodeBlock}>
        <Code>const x = 10;</Code>
      </BlockContext.Provider>,
    );
    const codeElement = screen.queryAllByText('code');
    codeElement.forEach((elem) => {
      expect(elem).toHaveClass('text-white');
    });
  });
});
