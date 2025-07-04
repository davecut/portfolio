export function groupStacksByCategory(stacks: Record<string, any>) {
    return Object.values(stacks).reduce(
        (acc, stack) => {
            const { category } = stack;
            if (!acc[category]) acc[category] = [];
            acc[category].push(stack);
            return acc;
        },
        {} as Record<string, (typeof stacks)[keyof typeof stacks][]>
    );
}
