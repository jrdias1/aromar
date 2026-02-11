import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from '../sections/About';

describe('About Component', () => {
    it('renders about section with correct title', () => {
        const fadeUp = { hidden: {}, visible: {} };
        render(<About fadeUp={fadeUp} />);

        expect(screen.getByText(/Sobre a marca/i)).toBeInTheDocument();
        expect(screen.getByText(/Criada com paixão e cuidado/i)).toBeInTheDocument();
    });
});
