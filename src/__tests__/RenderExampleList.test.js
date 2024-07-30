import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { act } from 'react'; // Import act from react

import RenderExampleList from '../components/ExampleListComponent/RenderExampleList';

afterEach(() => {
    cleanup();
    jest.restoreAllMocks();
    jest.clearAllMocks();
});

const mockData = [
    {
        id: 1,
        albumId: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
    {
        id: 2,
        albumId: 1,
        title: "reprehenderit est deserunt velit ipsam",
        url: "https://via.placeholder.com/600/771796",
        thumbnailUrl: "https://via.placeholder.com/150/771796",
    },
    {
        id: 3,
        albumId: 1,
        title: "officia porro iure quia iusto qui ipsa ut modi",
        url: "https://via.placeholder.com/600/24f355",
        thumbnailUrl: "https://via.placeholder.com/150/24f355",
    },
];

describe('<RenderExampleList /> test suite', () => {
    test('items container is rendered when passed empty "data" array', () => {
        let container;
        act(() => {
            container = render(<RenderExampleList data={[]} />).container;
        });

        expect(container.querySelectorAll('div')).toHaveLength(1);
        expect(container.firstChild.children).toHaveLength(0);
    });

    test('items container shows prop type error if no "id" property is present in data', () => {
        const incorrectData = mockData.map(({ id, ...rest }) => rest); // Destructure to omit `id`
        const mockConsoleError = jest.spyOn(console, 'error').mockImplementation();

        act(() => {
            render(<RenderExampleList data={incorrectData} />);
        });

        expect(mockConsoleError).toHaveBeenCalled();
        expect(mockConsoleError.mock.calls[0][0]).toContain("Warning: Failed %s type: %s%s");

        mockConsoleError.mockRestore();
    });

    test('items container returns elements containing item data', () => {
        let container;
        act(() => {
            container = render(<RenderExampleList data={mockData} />).container;
        });

        expect(container.firstChild.children).toHaveLength(3);
    });
});
